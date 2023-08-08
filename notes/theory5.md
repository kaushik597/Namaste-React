## 1. what is the difference between named export, default export and * as export?
Ans: We have 2 types of exports and imports they are named and default
    1. Named export:
    in a js file you can export a single constant variable and import it in your file with the same name whenever you need it.
    eg: export const NAME="kaushik"   in file test.js

    Note: Named exports should be imported with curly braces like shown below
    import {NAME} from './test'  ["in whichever path your file is "]

    Can export multiple values

    2. Default export:
    This is generally used to export the component you have created. It is preferred to use the component name when exporting
    eg: export default Header

    you can import it like below
    import Header from '../components/Header'  [in whichever path your file is]
    you can use any name while importing instead of Header you can use Head.

    Can export single value.A default export can be a function, a class, an object or anything else.


    3. 
    when you have multiple exports in single file and you are not sure which one should be imported and incase all are required you can export them normally as named exports and then when you import them you can import it using *

    eg: 
export const IMAGES_URL='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'



you can import any of these using * as below
import * as test from "../utils/constants";

and the one you need like below
 <img className="img-container" src={test.IMAGES_URL+cloudinaryImageId}></img>

what i have observed is this works onlyfor named exports.

# 2. What is the importance of config.js?
Ans: config.js file will have all the configurations required for that application. Configurations are defined in it. Anyone in the team can view it and understand how the configurations are done.

# 3. What are React Hooks?
Ans: React hooks are utility functions provided by React. There are many hooks but most importantly we use useState and useEffect. They are prebuilt and have some super powers for eg: useState helps in updating the state of a component and binds the data layer and ui layer synchronously.

# 4. Why do we need useState hook?
Ans: useState hook is used to update the local state of your component. If your application is dynamic and data will change on various actions or events. In this scenario useState works very well. In our example we have filtered the restaurants upon clicking a button and we can see that changes on the ui as well. useState helps in updating the state of the component so that data updates accordingly.
