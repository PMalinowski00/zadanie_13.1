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



function Box() {

    const [{
        id: boxId,
        title: boxTitle,
        content: boxContent,
    }] = data;

    var newBox = document.createElement('div');
    var newTitle = document.createElement('title');
    var newHeader = document.createElement('header');

    newBox.className = 'box box-bg';
    newHeader.className = 'header header-special';
    newTitle.className = 'title';


    newTitle.innerHTML = boxTitle;
    newHeader.innerHTML = newTitle + boxContent;
    newBox.innerHTML = newHeader;
    newBox.id = boxId;
    document.body.appendChild(newBox).appendChild(newHeader).appendChild(newTitle);

}
Box(data[2]);