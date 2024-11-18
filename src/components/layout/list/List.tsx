import './List.scss';

interface ListProps {
    list: any[];
    customClass: string;
    renderItem: (item: any) => React.ReactNode;
}

function List({ list, customClass, renderItem }: ListProps) {
    return (
        <div className={`list ${customClass}`}>
            {list.map((item, index) => (
                <div key={index}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
}

export default List;