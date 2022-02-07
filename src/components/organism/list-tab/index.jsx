import { Button } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { handleSetFilter, selectFilter } from 'store/filter-slice';

import styles from './styles.module.scss';

const { tab_container } = styles;

const ListTab = (props) => {
  const { buttons } = props;

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <section className={tab_container}>
      {buttons?.map((btn, idx) => {
        return (
          <Button
            variant={filter === btn.values ? 'primary' : 'secondary'}
            size="small"
            onClick={() => {
              dispatch(handleSetFilter(btn.values));
            }}
          >
            {btn.name}
          </Button>
        );
      })}
    </section>
  );
};

export default ListTab;
