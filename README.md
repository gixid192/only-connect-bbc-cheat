# only-connect-bbc-cheat

I get bored so I write a small code to help me win the game

### The game from: http://www.puzzgrid.com

1. Internet Explorer is not my cup of tea.
2. I personally use Chrome, so I add this code to [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
If you don't use it, then you can just paste it to the console window. No code modifies needed.
3. I added the 3 buttons: Stop Timer, Reveal Row and Reveal Summary.
Those 3 buttons will display in the main menu of the game. But only after you press "Begin" button.
4. I use basic colos to mark the answers.
`Red, Blue, Green, Yellow` - If 4 cards have the same color, they are connected together.


### Should-Do-List
- The game is quite hard for non-native speakers so I plan to add a link to oxford dictionary to each Summary Word.  
I personally have my "mouseover" dict (just like [DDict](https://chrome.google.com/webstore/detail/ddict-translate-translato/bpggmmljdiliancllaapiggllnkbjocb)) so I'm not sure this is useful feature.
- Auto typing Summary Word.  
Typing is good, it helps remember the word. I personally don't like this idea. But I sometimes quite lazy.

### FAQ
* Will it work for the game from [BBC page](http://www.bbc.co.uk/programmes/articles/2Z79DzzJY8w2R58bpftq14k/quiz)?

No it won't.  
In BBC site, they use flash to create the game so the code is inside the SWF file.  
I read the code, I can cheat it manually. I'm trying to figure out how to automate it since the data (questions and answers) is loaded dynamically, through xml files. Maybe another bored day.
