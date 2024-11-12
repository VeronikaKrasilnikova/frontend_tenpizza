
export const handlePriceKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const invalidChars = ['-', '+', 'e', 'E'];
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  
  export const handleDescriptionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = /^[a-zA-Zа-яА-Я.,;:()]+$/;
    if (!pattern.test(e.key) && e.key !== 'Backspace' && e.key !== ' ') {
      e.preventDefault();
    }
  };

  export const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = /^[1-9a-zA-Zа-яА-Я._@-]+$/;
    if (!pattern.test(e.key) && e.key !== 'Backspace' && e.key !== ' ') {
      e.preventDefault();
    }
  };
  
  export const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = /^[a-zA-Zа-яА-Я]+$/;
    if (!pattern.test(e.key) && e.key !== 'Backspace' && e.key !== ' ') {
      e.preventDefault();
    }
  };

export const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
    if (!allowedKeys.includes(e.key) && (e.key < '0' || e.key > '9')) {
      e.preventDefault();
    }
  };

  