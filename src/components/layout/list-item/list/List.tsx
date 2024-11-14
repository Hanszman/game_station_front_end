// List.tsx
import './List.scss';

interface ListProps {
    list: any[];
    renderItem: (item: any) => React.ReactNode;
}

function List({ list, renderItem }: ListProps) {
    return (
        <div className='list'>
            {list.map((item, index) => (
                <div key={index}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
}

export default List;