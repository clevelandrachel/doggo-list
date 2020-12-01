# doggo

## Notes
Built locally with Node. Adding Bootstrap for longterm management of standards based HTML, CSS, JS, as well as its built-in development testing. The doggo list is using an appendChild method to add items to the list. Without a UI framework, used vanilla code to simply demonstrate concepts. Should discuss handling of local and backend storage to decide how to serve content. The site end points will query the list of doggos. 

This tracker application allows for dynamic creation and updating of a list of doggos and link to doggo details, such as:

- Name of doggo;
- Breed of doggo;
- Link to a detail page;
- A list of all the doggos and sample doggo is dynamically generated through the following endpoints:

ACCESS URL

/login
- POST /username

/doggos-list
- GET /doggos/{id}  indexList -> getList() -> returns a list of doggos

/doggo
- GET/doggo/{id}
- POST/doggo
- PUT /doggo/{id}
- DELETE /doggo/{id}

/doggodetails
- GET /doggosdetails/{id}  indexDoggo -> getDoggo() -> returns a doggo detail
	
## Site structure
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
doggos/
└── dist/
    ├── css/
    └── js/
    index.html
```

## Schema

returns example:

```json
{
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
