export function filterData(searchText, restaurants) {
    const lowerCaseSearchInput = searchText.toLowerCase();
    const filterData = restaurants.filter((data) =>
      data.info.name.toLowerCase().includes(lowerCaseSearchInput)
    );
    return filterData;
  }