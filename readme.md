# CYCLOPS
So there's a bar in my neighborhood that I love, but their website is hot garbo nonsense. I figured, for my project, I would redesign it for them. Using RoR/PostgreSQL backend and React frontend, I made a much more visually appealing and functional website that I may end up sending to the bar to see if they want to use, although I know for a fact that the very stubborn owner is gonna stick with her mid-2000s Myspace page of a website.

## PLAN
The design for the website incorporates a main landing page with some cool photos and a dumb quirky bio. The nav in the header has links to the food and drinks menus, as well as an option for admin login. Once an admin is logged in, they will be given full CRUD capabilities over the menu (show/add/edit/remove menu items). In hindsight, the admin privileges should have been established in a separate app that pings the same API as this one, but I didn't know that at the time that I built this app, so whatever.

### Route Table
Let's see if I can represent this somewhat cleanly in readme format...
- "/": Home Route (landing page, viewable to all)
- "/food": Food Menu (displays entrees and appetizers, viewable to all)
    - ADMIN ONLY:
    - "/food/entrees/" CRUD options for entrees
        - ":id" Show Specific Entree
        - ":id/edit" Edit Specific Entree
        - "new" Add New Entree
    - "/food/appetizers/" CRUD options for apps
        - ":id" Show Specific Appetizer
        - ":id/edit" Edit Specific Appetizer
        - "new" Add New Appetizer
- "/drinks": Drinks Menu (displays cocktails, beer, and wine, viewable to all)
    - ADMIN ONLY:
    - "/drinks/cocktails" CRUD options for cocktails
        - ":id" Show Specific Cocktail
        - ":id/edit" Edit Specific Cocktail
        - "new" Add New Cocktail
    - "/drinks/beerwines" CRUD options for beers and wines
        - ":id" Show Specific Beer or Wine
        - ":id/edit" Edit Specific Beer or Wine
        - "new" Add New Beer or Wine
- "/login" Admin Login (it's a secret to everyone)

### Data Structure
Data is separated into four separate relations: Entrees, Appetizers, Drinks, and BeerWines. None of these are related, or connected to any authenticated users, so admittedly this may not have been the best choice for showing off my skills with a related database. But whatever, it still works.

##### Entrees/Appetizers (they both have the same schema)
- name: string
- price: integer
- description: string
- vegetarian: boolean
- vegan: boolean
- gf: boolean
- df: boolean

Name/price/description are all self-explanatory, four booleans at the end are used to display diet-friendly icons on the menu page

##### Drinks
- name: string
- price: integer
- description: string

By far the simplest/most straightforward schema of the four

##### BeerWines
- name: string
- beer: boolean
- draft: boolean
- red: boolean

Prices are not listed for beers/wines, but the set of booleans allows for a small binary tree to distinguish between draught beer, bottled/canned beer, red wine, and white wine.

### Technologies Used
- Ruby/Rails (backend)
- JS/Node/ReactJS (frontend)
- CSS/Bootstrap (make it look pretty)
- Heroku/Netlify (host that boy)
- Github (so I can keep my code somehwat organized)

### Website Links

Original Website (eww): http://www.cyclopsseattle.com/Drink_Specials.html

My Frontend (slightly less eww): https://pensive-hypatia-1ca301.netlify.app/

My Backend (probably still some eww): https://minotaurbackend.herokuapp.com/
- you'll need to add the four different relation routes onto the end of this bad boy in order to see anything