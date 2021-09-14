# UFOs
## Project Overview
The purpose of this project was to create an interactive website where users could view all of our logged UFO sightings in a visually appealing list. For the data, each entry is displayed in a table as a row, listing the date of the sighting, city, state & country where the sighting occurred, the shape of the sighted UFO, the duration of the sighting, and additional notes or comments. The dynamic search allows a visitor to the webpage to filter down results by date, city, state, country, and/or shape, in any combination. 

## Results
The search criteria are as follows:
-	Date
-	City
-	State
-	Country
-	Shape

These can be entered by the user into a text field. If no filters are provided, the entire list will be displayed. The user can enter any combination, or all, filters to get down to the data they want. They may be entered in any order. 
### Search Suggestions
-	The user may be interested to see what sightings have occurred in their state. To do this, they would simply type in their state’s 2 letter abbreviation:
    - MN for example, has no sightings:![MN Search](https://user-images.githubusercontent.com/85597801/133176049-f57f194a-445c-4fd0-a3b4-75e347955675.png)

    - But if we change to CA, the list is fairly long:![CA Search](https://user-images.githubusercontent.com/85597801/133175998-520af3d3-5207-477e-a6fa-802c980bb0f9.png)
-	If the user wished to see sightings of a specific shape, for example triangle, they could add that as well:![CA Triangle Search](https://user-images.githubusercontent.com/85597801/133176176-631d256b-879c-492b-801d-f1ebd287a00d.png)

This could allow any user who had a sighting themselves to easily try to hone in and see if anyone else reported a similar sighting nearby. We could also filter down by cities, to see if there are any hot spots, or country as we get more data (at this point the sightings seem to be primarily US, with 2 Canada sightings). 

## Summary
One draw back of this design is the limitation of search boxes, as opposed to drop down menus. This could lead to users making a typo, or entering the data incorrectly (for example, 1/1/2010 pulls up a lot of results; 01/01/2010 pulls up no results). This may be additionally challenging to international visitors, who use a different date format all together (2010/01/01). It also would require the knowledge of the state’s 2 digit abbreviation code to filter down by state. So, as far as expanding the project outside of the US, there are definitely improvements which could be made. 

One improvement would be if we could provide drop down options, rather than empty text fields, which would display a list of the available options and allow you to click which one you want to see. This also allows the user to see a summary of available data at a glance as well (for example, it would show you every country with at least 1 sighting, without having to scroll through the whole list). This would likely take some significantly more complicated coding, but would really improve the professionalism of the website. 

An additional improvement, particularly as the data set continues to expand, would be the option for the user to export their filtered data into another format, making it easier for them to save. At this point the user could ‘print’ the page to keep a record of what their search results yielded, but the ability to export would bring an even higher level of professionalism to the page. However, again, this would likely take some seriously complicated coding. 

In it’s current state, the website is visually appealing and meets all basic functionality requirements of most of our users, however, there are a few additions we could make that would really up the professionalism of the website and make it more future proofed as our project expan