//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// This javascript file loads the default layout for each monitor and changes the layouts when tabs are changed ////
//// There are two functions. "openLayout" populates the tabs and allows switching between layouts ///////////////////
//// "openDefault" opens the default layout for each monitor /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////
// HTML code example for the buttons on the HTML layout pages - NOT FOR USE IN THIS FILE! //////
////////////////////////////////////////////////////////////////////////////////////////////////
// EXAMPLE: /// <button class="tablinks" onclick="openLayout('A', 'Mon1')">Full</button> ///////
////////////////////////////////////////////////////////////////////////////////////////////////
// "button" creates the tab for the layout /////////////////////////////////////////////////////
// class="tablinks" styles the tab button //////////////////////////////////////////////////////
// onclick="openLayout(....) calls the function openLayout to change the monitor layout ////////
// The first variable, in this example 'A', refers to the layout design below //////////////////
// The second variable refers to which monitor on the HTML layout to change, e.g. 'Mon1' ///////
// Make sure this is changing the correct monitor! /////////////////////////////////////////////
// The text before </button> id the name shown on the tab button ///////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// To set the default layout to be opened, an additional attribute  is required ////////////////
// id="defaultOpen1" is required within the <button> tag ///////////////////////////////////////
// The number on the end refers to the monitor for which it applies to! ////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// <button class="tablinks" onclick="openLayout('A', 'Mon1')" id="defaultOpen1">Full</button> //
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
// Function "openLayout" parses the variables "layoutName" and "mon" from the HTML file ////////
////////////////////////////////////////////////////////////////////////////////////////////////
function openLayout(layoutName, mon) {    // "layoutName" is the layout design to be recalled, "mon" is the monitor to which it applies
    'use strict';                         // Defines that JavaScript code should be executed in "strict mode".
    var i, tablinks;                      // "i" is a counting variable for loading of tabs // "tablinks" is the classname of the element 
    
    //////////////////////////////////////////////////////////////////////////////////
    // Adds the layout tabs at the top of the monitor as specified in the HTML file //
    // for loop that repeats until all layout tabs have been added for that monitor //
    //////////////////////////////////////////////////////////////////////////////////
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i += 1) {
        // tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    ////////////////////////////////////////////////////////////////////////////////////
    // Change layout to monitor based on layout requested. /////////////////////////////
    // "case" is a layout parsed, "mon" is the monitor ID parsed. //////////////////////
    // The HTML for the layout is contained within single quotes after ".innerHTML =" //
    ////////////////////////////////////////////////////////////////////////////////////
    switch (layoutName) {
    case "A": // Full
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 240px"><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "C": // 4-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 120px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td> </tr><tr style="height: 120px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "E": // 8-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 80px"><td></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "F": // 9-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "G": // 12-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="4"></td> </tr> </table>';
        break;
    case "H": // 16-way
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "K": // 25-way   
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table>'; 
        break;
    case "N": // VT Co-ord 1
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table>';
        break;
    case "O": // VT Co-ord 2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> </colgroup> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 144px"> <td colspan="5" ><input type="text" class="textbox"></td> <td colspan="5" ><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr></table>';
        break;
    case "P": // 10+2
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "Q": // 3+2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "R": // 4+2
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="4"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "S": // 8+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="4"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "V": // 3+4
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "W": // 
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "X": // 12+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "Y": // 1+12
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 60px"> <td colspan="2" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "AA": // 24-way VT Co-ord
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> <col style="width: 10%;"/> </colgroup> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td> </td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> <td> </td> </tr></table>';
        break;            
    case "EE": // 6+1
        document.getElementById(mon).innerHTML = '<table class="table"> <colgroup> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> <col style="width: 25%;"/> </colgroup> <tbody> <tr style="height: 80px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 80px"> <td colspan="3" rowspan="2"><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 80px"> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "GG": // 2+10
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 120px"> <td colspan="2"><input type="text" class="textbox"></td> <td colspan="2"><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 60px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> </table>';
        break;
    case "OO": // 30
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr> <tr style="height: 48px"> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> <td><input type="text" class="textbox"></td> </tr></table>'; 
        break;
            
    case "xxx1": // 1+5 way - Special Producer 1 Layout
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 80px"><td colspan="2" rowspan="2"><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;        
    case "xxx2": // 1+5 way - Special Producer 1 Layout
        document.getElementById(mon).innerHTML = '<table class="table"> <tr style="height: 80px"><td><input type="text" class="textbox"></td><td colspan="2" rowspan="2"><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td></tr><tr style="height: 80px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;
            
    case "1A5": // PCR1 - 3+2
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 80px"><td colspan="2"><input type="text" class="textbox"></td><td colspan="2"><input type="text" class="textbox"></td><td colspan="2"><input type="text" class="textbox"></td></tr><tr style="height: 40px"></tr><tr style="height: 120px"><td colspan="3"><input type="text" class="textbox"></td><td colspan="3"><input type="text" class="textbox"></td></tr><tr style="height: 0px"><td/><td/><td/><td/><td/><td/></tr></table>';
        break;
    case "1B7": // PCR1 - Quad-in-quad, UL
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td colspan="2" rowspan="2"><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 120px"><td colspan="2"><input type="text" class="textbox"></td><td colspan="2"><input type="text" class="textbox"></td></tr><tr style="height: 0px"><td/><td/><td/><td/></tr></table>';
        break;
    case "1E7": // PCR1 - Quad-in-quad, LR
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 120px"><td colspan="2"><input type="text" class="textbox"></td><td colspan="2"><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td colspan="2" rowspan="2"><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 0px"><td/><td/><td/><td/></tr>';
        break;
    case "1H8": // PCR1 - 8-way, large LL
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td colspan="3" rowspan="3"><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "1I8": // PCR1 - 8-way, large LR
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td colspan="3" rowspan="3"><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td></tr></table>';
        break;
    case "1J10": // PCR1 - 10-way, left
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 60px"><td colspan="2" rowspan="2"><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td colspan="2" rowspan="2"><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 0px"><td/><td/><td/><td/></tr></table>';
        break;
    case "1L13": // PCR1 - 13-way, large UL
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 60px"><td colspan="2" rowspan="2"><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;    
    case "1P13": // PCR1 - 13-way, large LR
        document.getElementById(mon).innerHTML = '<table class="table"><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td><td colspan="2" rowspan="2"><input type="text" class="textbox"></td></tr><tr style="height: 60px"><td><input type="text" class="textbox"></td><td><input type="text" class="textbox"></td></tr></table>';
        break;  
        
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Get the element with id="defaultOpen" and click on it. Displays the default layout on page load. //
//////////////////////////////////////////////////////////////////////////////////////////////////////
function openDefaults() {
    'use strict';
    let mon = "";
        for (let i = 1; i < 11; i += 1) {
        mon = "defaultOpen" + i;
        document.getElementById(mon).click();
    }
}