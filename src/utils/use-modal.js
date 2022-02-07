import { useCallback, useState } from 'react';

const useModal = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  return {
    isOpen,
    toggleModal: useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]),
  };
};

export default useModal;
