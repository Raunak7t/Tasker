export default function useLocalData() {
  let allData = JSON.parse(localStorage.getItem("taskerData"));
  return {
    userName: allData.userName ? allData.userName : "User",
    tasks: allData && allData.tasks.length > 0 ? allData.tasks : [],
  };
}
