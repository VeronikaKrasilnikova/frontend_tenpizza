import React, { useState, useEffect, useRef } from 'react';

const colors = {
  processed: "bg-processed",
  prepared: "bg-prepared",
  ready: "bg-ready",
  received: "bg-received",
  cancelled: "bg-cancelled",
};


const statuses = {
  processed: "Обрабатывается",
  prepared: "Готовится",
  ready: "Готов",
  received: "Получен",
  cancelled: "Отменен",
};


interface ButtonProps {
  text?: keyof typeof statuses;
  color?: keyof typeof colors;
  onClick?: () => void;
}

const commonStyles = `w-[180px] h-[40px] text-white font-bold rounded-[10px]`;

const StatusButton: React.FC<ButtonProps> = ({ text = "processed", color = "processed", }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<keyof typeof statuses>(text); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleStatusSelect = (status: keyof typeof statuses) => {
    setSelectedStatus(status); 
    setDropdownOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container_list">
      <button
        className={`${commonStyles} ${colors[selectedStatus]} hover:bg-${color}-600`}
        onClick={handleDropdownClick}
      >
        {statuses[selectedStatus]} 
      </button>
      {dropdownOpen && (
        <div className="dropDown" ref={dropdownRef}>
          <ul className="py-2">
            {Object.keys(statuses).map((status) => (
              <li
                key={status}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                onClick={() => handleStatusSelect(status as keyof typeof statuses)}>
                {statuses[status as keyof typeof statuses]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusButton;
