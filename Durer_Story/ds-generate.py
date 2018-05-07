from PIL import Image
import csv
import random

yearcount = 0
itemcount = 0
year = 0
lifebirthyear = 1471
lifedeathyear = 1528
lastprocessedyear = 1471
livinglocation = 'Nuremberg'
sectionid = 1

td = 3
tagline = ''
imgsize = 2
index = open("index.html","w+")

with open("header.txt") as script:
 for line in script:
   index.write(line)

index.write("<a id=\"top\"></a>")
index.write("\r\n")
index.write("<br> <h1>Albrecht D&uuml;rer's Story in The Met</h1> ")
index.write("\r\n")

#Durer birth
index.write("<hr> <hr>")
#index.write("<p> <br> <h2> 1471 </h2> <br> <br> <section id=\"section-1\"> <Nuremberg> \r\n")
index.write("<p> <br> <h2> 1471 </h2> <br> <br> <section> <Nuremberg> \r\n")
index.write("<table><tr><td> \r\n")
index.write("<life> &#09; May 21 D&uuml;rer Born in Nuremberg, Germany. He was a painter, printmaker, and theorist of the German Renaissance. D&uuml;rer established his reputation and influence across Europe when he was still in his twenties due to his high-quality woodcut prints. He was in communication with the major Italian artists of his time, including Raphael, Giovanni Bellini and Leonardo da Vinci, and from 1512 he was patronized by emperor Maximilian I. D&uuml;rer is commemorated by both the Lutheran and Episcopal Churches. </life> </p> <br>\r\n")
index.write("</td></tr></table></p>")
index.write("<hr><hr><br>")

with open('ds.csv') as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
         print(row['Series'], row['Title'], row['Object Begin Date'], row['Image File Name'], row['Link Resource'])
         itemcount = itemcount + 1
         yearcount = yearcount + 1
         if year != row['Object Begin Date'] and year != 0: #item in met
             lastprocessedyear = year
             year = row['Object Begin Date']
             if td == 0:
               index.write("</tr>\r\n")
             elif td == 1:
               index.write("<td></td></tr>\r\n")
               tagline = tagline + "<td> </td> "
             elif td == 2:
               index.write("<td></td><td></td></tr>\r\n")
               tagline = tagline + "<td> </td> <td> </td> "
             elif td == 3:
               index.write("<td></td><td></td><td></td></tr>\r\n")
               tagline = tagline + "<td> </td> <td> </td> <td> </td> "
             index.write("<tr> " + tagline + "</tr>\r\n")
             tagline = ''
             td = 4 
             #end last year table
             dline = open('dhistory/'+(lastprocessedyear)+'.txt').read().splitlines()
             durLife = random.choice(dline)
             if durLife != '':
               index.write("<tr> <td colspan=\"4\"> <br><life> D&uuml;rer's Life: " + durLife + "</life><br><br> </td> </tr>")
             wline = open('history/'+lastprocessedyear+'.txt').read().splitlines()
             durWorld = random.choice(wline)
             if durWorld != '':
                index.write("<tr> <td colspan=\"4\"> <br><world> World History: " + durWorld + "</world><br> </td> </tr>")
             index.write("</table><br><br>\r\n")
             #end last year history 
             if row['Living'] != livinglocation:
                index.write("</"+livinglocation+"> \r\n") #end old living location
                index.write("</section>\r\n")
                livinglocation = row['Living']
                if livinglocation != '':
                   index.write("<"+livinglocation+"> \r\n") #start new living location
                sectionid = sectionid + 1
                #index.write("<section id=\"section-"+str(sectionid)+"\">>\r\n")
                index.write("<section >\r\n")
                index.write("<br><br>\r\n")
                #new year  
                yearcount = 0
                index.write("<a id=\"y" + year + "\"></a><br></p>\r\n")
                index.write("<p> <hr> <br> <h2> " + year + " </h2> <br>\r\n")
                #https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sticky_element
                index.write("<div class=\"sticky\">"+livinglocation+"</div> \r\n") #start new living location
             else:
                index.write("<br><br>\r\n")
                #new year  
                yearcount = 0
                index.write("<a id=\"y" + year + "\"></a><br></p>\r\n")
                index.write("<p> <hr> <br> <h2> " + year + " </h2> <br>\r\n")
             index.write("<table>\r\n")
         elif year != row['Object Begin Date']: # only when year == 0 
             year = row['Object Begin Date']
             index.write("\r\n<div class=\"sticky\">Nuremberg</div> \r\n") #start new living location
             index.write("<a id=\"y" + year + "\"></a><br></p><br>\r\n")
             index.write("<p> <br> <h2> " + year + " </h2> <br>\r\n")
             index.write("<table>\r\n")
         if td == 0:
            index.write("</tr>\r\n")
            index.write("<tr> " + tagline + "</tr>\r\n")
            index.write("</table><br><br>\r\n")
            index.write("<table >\r\n")
            tagline = '' 
            td =4 
         if ((yearcount - 1 )  == 0) or (td == 4):
            index.write("<tr>\r\n") 
         if row['Series'] != '':
           if row['Series'] == 'The Apocalypse' :
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'The Small Woodcut Passion':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'Ritter von Turn':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'Sebastian Brandt':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'The Comedies of Terence':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'Vier Bucher von Menslicher':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'Revelations Sancte Birgitte':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'The Life of the Virgin':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'Treatise on Fortification':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'The Large Passion':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'Opera Hrosvita':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'The Small Passion':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           elif row['Series'] == 'The Passion':
             tagline = tagline + "<td valign=\"middle\"><div class=\"tooltip\"> " + row['Series'] + " <span class=\"tooltiptext\">Series</span></td> "
           else:
             tagline = tagline + "<td valign=\"middle\"> " + row['Series'] + " </td> "
         else:
           tagline = tagline + "<td> </td> "

         imagefile = "./images/" + row['Image File Name']
         with Image.open(imagefile) as img:
           width, height = img.size 
           print "image width" + str(width)
           print "image height" + str(height)
           index.write("<td> <a href=\"" + row['Link Resource'] + "\" target=\"_blank\">")
           index.write(" <img style=\"border:0;width=\""+str(width/imgsize)+"\" height=\""+str(height/imgsize)+"\"\"")
           index.write(" src=\"./images/" + row['Image File Name'] + "\" alt=\"Interactive Story\"></a></td> \r\n")

         td = td - 1
         yearcount = yearcount + 1

lastprocessedyear = year
year = row['Object Begin Date']
if td == 0:
  index.write("</tr>\r\n")
elif td == 1:
  index.write("<td></td></tr>\r\n")
  tagline = tagline + "<td> </td> "
elif td == 2:
  index.write("<td></td><td></td></tr>\r\n")
  tagline = tagline + "<td> </td> <td> </td> "
elif td == 3:
  index.write("<td></td><td></td><td></td></tr>\r\n")
  tagline = tagline + "<td> </td> <td> </td> <td> </td> "
index.write("<tr> " + tagline + "</tr>\r\n")
tagline = ''
td = 4
index.write("</table><br><br>\r\n")
#end last year table
dline = open('dhistory/'+(lastprocessedyear)+'.txt').read().splitlines()
durLife = random.choice(dline)
if durLife != '':
  index.write("<table><tr><td> \r\n")
  index.write("<br><life> D&uuml;rer's Life: " + durLife + "</life><br><br>")
  index.write("</table></tr></td> \r\n")
wline = open('history/'+lastprocessedyear+'.txt').read().splitlines()
durWorld = random.choice(wline)
index.write("<table><tr><td> \r\n")
index.write("<br><world> World History: " + durWorld + "</world><br>")
index.write("</table></tr></td> \r\n")
#end last year history 
if row['Living'] != livinglocation:
     index.write("</"+livinglocation+"> \r\n") #end old living location
     livinglocation = row['Living']
     index.write("</section>\r\n")

index.write("\r\n")
index.write("<a id=\"bottom\"></a>\r\n")
index.write("</center> \r\n")
#with open("footer.txt") as script:
# for line in script:
#   index.write(line)

index.write(" </body></html> \r\n")

print "Count is " + str(itemcount)

