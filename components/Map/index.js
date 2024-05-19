import React, { useEffect } from "react";
import { Loader, useJsApiLoader } from "@react-google-maps/api";
import styles from "./Map.module.css";

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_APIKEY,
    version: "weekly",
  });

  useEffect(() => {
    async function initMap() {
      if (!isLoaded) return;

      const { google } = window;
      const { Map } = await google.maps.importLibrary("maps");

      const map = new Map(document.getElementById("map"), {
        center: { lat: 49.2519, lng: -123.0031 },
        zoom: 14,
        mapTypeControl: false,
        disableDefaultUI: true,
        mapId: "6aefa1788c23eb2b",
      });

      const markers = [
        {
          position: { lat: 49.3, lng: -123.14 },
          iconUrl: "/images/biking-pin.png",
          title: "Biking",
          location: "Stanley Park, Vancouver, BC V6G 1Z4",
          date: "April 24, 2024",
          time: "1:00 p.m.",
        },
        {
          position: { lat: 49.2497, lng: -123.1193 },
          iconUrl: "/images/biking-pin.png",
          title: "Biking",
          location:
            "Queen Elizabeth Park, 4600 Cambie St, Vancouver, BC V5Z 2Z1",
          date: "April 30, 2024",
          time: "10:00 a.m.",
        },
        {
          position: { lat: 49.2666, lng: -122.9895 },
          iconUrl: "/images/gardening-pin.png",
          title: "Community Garden",
          location:
            "GARDENWORKS, 6250 Lougheed Hwy., Burnaby, BC V5B 2Z9",
          date: "April 12, 2024",
          time: "12:00 p.m.",
        },
        {
          position: { lat: 49.201805, lng: -123.024274 },
          iconUrl: "/images/hiking-pin.png",
          title: "Hiking",
          location:
            "Fraser River Trail - River District Crossing, Vancouver, BC V5J 5H4",
          date: "May 5, 2024",
          time: "9:00 a.m.",
        },
        {
          position: { lat: 49.3788, lng: -123.081 },
          iconUrl: "/images/hiking-pin.png",
          title: "Hiking",
          location: "Grouse Grind Trail, North Vancouver, BC V7R 4K9",
          date: "May 20, 2024",
          time: "8:00 a.m.",
        },
        {
          position: { lat: 49.3679, lng: -123.0239 },
          iconUrl: "/images/hiking-pin.png",
          title: "Hiking",
          location: "Baden-Powell Trail, North Vancouver, BC V7R 4K9",
          date: "May 25, 2024",
          time: "10:00 a.m.",
        },
        {
          position: { lat: 49.2945, lng: -123.139999 },
          iconUrl: "/images/garbage-pin.png",
          title: "Beach Cleanup",
          location: "Second Beach, Stanley Park, Vancouver, BC V6G 3E2",
          date: "June 10, 2024",
          time: "1:00 p.m.",
        },
        {
          position: { lat: 49.3439, lng: -123.0669 },
          iconUrl: "/images/hiking-pin.png",
          title: "Hiking",
          location: "Lynn Canyon Park, North Vancouver, BC V7J 3G8",
          date: "June 15, 2024",
          time: "9:00 a.m.",
        },
        {
          position: { lat: 49.2880, lng: -123.1424 },
          iconUrl: "/images/garbage-pin.png",
          title: "Beach Cleanup",
          location: "English Bay Beach, Vancouver, BC V6E 1V3",
          date: "June 20, 2024",
          time: "9:00 a.m.",
        },
        {
          position: { lat: 49.0196, lng: -122.8010 },
          iconUrl: "/images/garbage-pin.png",
          title: "Beach Cleanup",
          location: "White Rock Beach, Surrey, BC V4B 1Z1",
          date: "June 25, 2024",
          time: "10:00 a.m.",
        },
        {
          position: { lat: 49.225754, lng: -123.014296 },
          iconUrl: "/images/hiking-pin.png",
          title: "Trail of Hope",
          location:
            "Central Park, 3883 Imperial St, Burnaby, BC V5J 1A3",
          date: "April 12, 2024",
          time: "12:00 p.m.",
        },
        {
          position: { lat: 49.2728, lng: -122.907 },
          iconUrl: "/images/gardening-pin.png",
          title: "Pick Your Own Farm",
          location:
            "Laity Pumpkin Patch, 21145 128th Avenue, Maple Ridge, BC V2X 8S9",
          date: "July 1, 2024",
          time: "10:00 a.m.",
        },
        {
          position: { lat: 49.2587, lng: -123.1372 },
          iconUrl: "/images/gardening-pin.png",
          title: "Community Garden",
          location:
            "Sunset Community Garden, 6810 Main St, Vancouver, BC V5X 0A1",
          date: "July 10, 2024",
          time: "11:00 a.m.",
        },
        {
          position: { lat: 49.272, lng: -122.90904 },
          iconUrl: "/images/biking-pin.png",
          title: "Biking",
          location:
            "Burnaby Mountain Hiking Trails, University Dr E, Burnaby, BC V5A 4Y8",
          date: "June 1, 2024",
          time: "3:00 p.m.",
        },
        {
          position: { lat: 49.273518, lng: -122.90904 },
          iconUrl: "/images/hiking-pin.png",
          title: "Hiking",
          location:
            "Burnaby Mountain Biking Trails, University Dr E, Burnaby, BC V5A 4Y8",
          date: "June 5, 2024",
          time: "9:00 a.m.",
        },
      ];

      markers.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: markerData.position,
          map: map,
          icon: {
            url: markerData.iconUrl,
            scaledSize: new google.maps.Size(40, 54),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
          },
        });

        google.maps.event.addListener(marker, 'click', () => {
          const infowindow = new google.maps.InfoWindow({
            content: `
            <div class="${styles.main}">
              <div class="${styles.infowindowContent}">
                <div class="${styles.infowindowHeader}">
                  <div class="${styles.infowindowTitle}">${markerData.title}</div>
                  <button class="${styles.infowindowButton}" onclick="handleButtonClick()">Join</button>
                </div>
                <div class="${styles.infowindowDetails}">
                  <strong>Location:</strong> ${markerData.location}<br>
                  <strong>Date:</strong> ${markerData.date}<br>
                  <strong>Time:</strong> ${markerData.time}
                </div>
              </div>
              </div>
            `,
          });
          infowindow.open(map, marker);
        });
      });
    }

    initMap();
  }, [isLoaded]);

  return (
    <div
      className={styles.container}
      id="map"
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
}

export default Map;
