# doggo

## Introduction
Built with Node, the app utilizes Bootstrap framework for standards based HTML, CSS, JS, as well as its built-in testing frameworks for development.
The list is using a appendChild method to quickly add items to the list. 

I created this tracker application that allows for dynamic creation and updating for a list of doggos and link to doggo details, such as:

- Name of doggo;
- Breed of doggo;
- Link to a detail page;
- A list of all the doggos and sample doggo is dynamically generated through the following endpoints:

Access URL	
/login
-POST /username
/doggos-list
-GET /doggos/{id}  indexList -> getList() -> returns a list of doggos
/doggo
-GET/doggo/{id}
-POST/doggo
-PUT /doggo/{id}
-DELETE /doggo/{id}
/doggodetails
-GET /doggosdetails/{id}  indexDoggo -> getDoggo() -> returns a doggo detail
	
## Site structure
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
doggos/
└── dist/
    ├── css/
    └── js/
    index.js
```

## How to install

```
git clone https://github.com/clevelandrachel/doggos.git
cd doggos
node index.js <username>
```

## Example

```
node index.js clevelandrachel
```

returns example:

```json
{
    "username": "clevelandrachel"
    },
    "doggos-list": [
        {
            "title": "Doogos List of Dogs",
            "url": "http://doggos.example.com/doggos-list/id/",
            {
              "doggo": [
              
            			  { "Name":"Amit" ,
              "Breed":"Doberman", "Link": "http://doggos.example.com/doggosdetails/id/" }, 
            			  { "Chava":"German Shephard" ,
              "Link": "http://doggos.example.com/doggosdetails/id/" }, 
            			  { "Name":"Charlie" , 
              "Breed":"Poodle","Link": "http://doggos.example.com/doggosdetails/id/" }
            			  ]
            			  }
            "total": 3
        }
    ],
    "totalCount": 1
}
```
