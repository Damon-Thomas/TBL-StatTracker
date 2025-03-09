const playerInfo = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api-web.nhle.com/v1/player/${id}/landing`
      )}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("player info data", JSON.parse(data.contents));
    return JSON.parse(data.contents);
  } catch (error) {
    console.error("THERE IS A FETCHING ERROR", error);
  }
};

export default playerInfo;
