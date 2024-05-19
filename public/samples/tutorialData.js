import {
    UilLightbulbAlt,
    UilEstate,
    UilLocationPoint,
    UilSchedule,
    UilUserCircle,
  } from "@iconscout/react-unicons";
  import { IconUtils } from "primereact/utils";
  
  const tutorialData = [
    {
      id: 1,
      title: "Welcome to Eco Findr!",
      description: "",
      Icon: UilLightbulbAlt,
    },
    {
      id: 2,
      title: "Home Page",
      description:
        "The Home icon in the navigation bar has all the latest, popular events. discover, join, & favourite events. ",
      Icon: UilEstate,
    },
    {
      id: 3,
      title: "Map Page",
      description:
        "The Map icon in the navigation bar has a search bar. Use it to search for events and join & favourite events.",
      Icon: UilLocationPoint,
    },
    {
      id: 4,
      title: "Calendar page",
      description:
        "The Calendar icon in the navigation bar is for adding your own events. Create & invite friends to join your events.",
      Icon: UilSchedule,
    },
    {
      id: 5,
      title: "Profile Page",
      description:
        "The profile icon in the navigation bar has all the latest, popular events. discover, join, & favourite events. ",
      Icon: UilUserCircle,
    },
  ];
  
  export default tutorialData;