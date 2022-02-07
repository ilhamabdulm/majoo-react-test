import OutsideHandler from 'react-outside-click-handler';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './styles.module.scss';
import { Portal } from 'components/atoms';
import { useEffect } from 'react';

const { overlay, content } = styles;

const overlayVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0, transition: { delay: 0.25 } },
};

const contentVariants = {
  open: { opacity: 1, bottom: 0, transition: { duration: 0.25 } },
  closed: { opacity: 0, bottom: '-100%', transition: { delay: 0.25 } },
};

const Drawer = (props) => {
  const { isOpen, onClose, onBack, children, title, secondAction } = props;

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <Portal className="modal-portal">
          <motion.div
            className={overlay}
            variants={overlayVariants}
            initial="closed"
            exit="closed"
            animate={isOpen ? 'open' : 'closed'}
          >
            <OutsideHandler onOutsideClick={onClose}>
              <motion.div
                className={content}
                variants={contentVariants}
                initial="closed"
                exit="closed"
                animate={isOpen ? 'open' : 'closed'}
              >
                {children}
              </motion.div>
            </OutsideHandler>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
