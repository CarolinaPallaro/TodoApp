const FiltersContainer = ({ children }) => {
    return (
      <div className="filtersContainer flex flex-row items-center justify-between  p-3   bg-gray-700 border-b border-solid border-gray-100 ">
        {children}
      </div>
    );
};

const ItemsLeft = ( {total }) => {
    return (
        <p className="text-gray-400 text-sm">
            items left {total}
        </p>
    )
};

const FilterButtonContainer = ({
    children
}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
};

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}>
                    {filter}
                    </button>
    )
}

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton }