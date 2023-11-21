import { keys } from "../../js/keys.js";

const getUser = (username) => {
    const url = `https://api.github.com/users/${username}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `token ${keys.github}`,
        },
    };

    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};

const getEvent = async (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `token ${keys.github}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const events = await response.json();
        return events;
    } catch (error) {
        return error;
    }
};

//MAIN
(async () => {
    getUser("min-rob").then((users) => console.log(users));
    const userEvent = await getEvent("min-rob");
    const pushEvents = userEvent.filter((event) => {
        return event.type === "PushEvent";
    });
    console.log(pushEvents);
    const lastPushEvent = pushEvents[0];
    const eventDate = new Date(lastPushEvent.created_at);
    console.log(eventDate);

    const latestUpdate = pushEvents.reduce((accumulator, event) => {
        if (event.created_at > accumulator) {
            accumulator = event.created_at;
        }
        return accumulator;
    }, []);

    console.log(latestUpdate);
})();
