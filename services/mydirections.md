# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJx8QYitY0K4gRM6moEMfmw0s&waypoints=place_id:ChIJA7SCPufL1IkR19jLJqMmv-Y|place_id:ChIJsRjTsS3L1IkRC177bW2To_4|place_id:ChIJWyfdtDHL1IkR_bal8ay1Cso&destination=place_id:ChIJCcYBxz3L1IkRFmpW29wp58M&mode=walking&transit_mode=rail&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:
Tourist itinerary (by walking & ferry)

Origin: CN Tower
```
https://www.google.com/maps/place/?q=place_id:ChIJx8QYitY0K4gRM6moEMfmw0s
```
Stopover: Toronto Islands
```
https://www.google.com/maps/place/?q=place_id:ChIJA7SCPufL1IkR19jLJqMmv-Y
```
Stopover: Hockey Hall of Fame
```
https://www.google.com/maps/place/?q=place_id:ChIJsRjTsS3L1IkRC177bW2To_4
```
Stopover: St Lawrence Market
```
https://www.google.com/maps/place/?q=place_id:ChIJWyfdtDHL1IkR_bal8ay1Cso
```
Destination: Distillery District
```
https://www.google.com/maps/place/?q=place_id:ChIJCcYBxz3L1IkRFmpW29wp58M
```

(returns map-preferred) Maps PlaceID search: https://www.google.com/maps/place/?q=place_id:ChIJFfiCrdo4Qm0RqPwuOAVtaj8
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJV2BQ4laeekgRFauLvdXbFXE&key=<INSERTKEY>

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=4569584641105657000


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
