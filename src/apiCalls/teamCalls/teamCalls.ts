const TBLroster = async () => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://api-web.nhle.com/v1/roster/TBL/current"
      )}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return JSON.parse(data.contents);
  } catch (error) {
    console.error("THERE IS A FETCHING ERROR", error);
  }
};

export default TBLroster;
