import { Button } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { handleSetFilter, selectFilter } from 'store/filter-slice';

import styles from './styles.module.scss';

const { tab_container } = styles;

const ListTab = (props) => {
  const { tabs } = props;

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <section className={tab_container}>
      {tabs?.map((btn, idx) => {
        return (
          <Button
            key={idx}
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
