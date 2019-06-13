'use strict';

var data = [{
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];



function Box(boxData) {

    for (var i = 0; i < data.length; i++) {
        var boxId = boxData[i].id;
        var boxTitle = boxData[i].title;
        var boxContent = boxData[i].content;

        var newBox = document.createElement('div');
        var newHeader = document.createElement('header');

        newBox.className = 'box';
        newHeader.className = 'header';

        newHeader.innerHTML = boxTitle + boxContent;
        newBox.id = boxId;
        document.body.appendChild(newBox).appendChild(newHeader);

        for (var j = 0; j < boxData[i].categories.length; j++) {
            newBox.classList.add(boxData[i].categories[j]);
        }
    }
}
Box(data);