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
index.write("<br> <h1>Albrecht D&uuml;rer Story in The Met</h1> ")
index.write("\r\n")

#Durer birth
index.write("<hr> <hr>")
#index.write("<p> <br> <h2> 1471 </h2> <br> <br> <section id=\"section-1\"> <Nuremberg> \r\n")
index.write("<p> <br> <h2> 1471 </h2> <br> <br> <section> <Nuremberg> \r\n")
index.write("<life> May 21 Born in Nuremberg, Germany </life> </p> <br>\r\n")
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
             index.write("</table><br><br>\r\n")
             #end last year table
             dline = open('dhistory/'+(lastprocessedyear)+'.txt').read().splitlines()
             durLife = random.choice(dline)
             if durLife != '':
                index.write("<br><life> " + durLife + "</life><br><br>")
             wline = open('history/'+lastprocessedyear+'.txt').read().splitlines()
             durWorld = random.choice(wline)
             index.write("<br><world> " + durWorld + "</world><br>")
             #end last year history 
             if row['Living'] != livinglocation:
                index.write("</"+livinglocation+"> \r\n") #end old living location
                index.write("</section>\r\n")
                livinglocation = row['Living']
                index.write("<"+livinglocation+"> \r\n") #start new living location
                sectionid = sectionid + 1
                #index.write("<section id=\"section-"+str(sectionid)+"\">>\r\n")
                index.write("<section >\r\n")
             index.write("<br><br>\r\n")
             #new year  
             yearcount = 0
             index.write("<a id=\"y" + year + "\"></a><br></p>\r\n")
             index.write("<p> <hr> <br> <h2> " + year + " </h2> <br>\r\n")
             index.write("<table>\r\n")
         elif year != row['Object Begin Date']: # only when year == 0 
             year = row['Object Begin Date']
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
  index.write("<br><life> " + durLife + "</life><br><br>")
wline = open('history/'+lastprocessedyear+'.txt').read().splitlines()
durWorld = random.choice(wline)
index.write("<br><world> " + durWorld + "</world><br>")
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

