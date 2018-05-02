## Fusion - React Components for *Your* Design System ##

### Why are we building this? ###
There are already a ton of really good Component Libraries out there, From [Ant Design](www.ant.design), to [MaterialUI](http://www.material-ui.com/#/) to [Rebass](http://jxnblk.com/rebass/) and many others. These are great libraries if you want to put together a great looking UI without you having to spend time on the look and feel.

However if you are working on a project, that requires you to follow a certain Visual Style Guide and respect the brand guidelines, you would run into challenges trying to force fit any of the above component libs to meet your project needs. We also felt the time taken to tweak any of these components to meet your specific needs kills the productivity gains of using the library in the first place.

We also feel many of the components in these libraries are over engineered to support multiple use cases, many of which you really dont need in your application. This is unnecessary bloat.

### How does Fusion Solve this? ###

Fusion is intended for React Developers who like to take full control on how their components look and behavior.

Fusion components contain the minimum set of features to get your component working in a project.

You are strongly encouraged to modify the components as per your style guide and design system.

You add Fusion to your project as a Git sub-tree so that fusion becomes a part of your source code instead of living within an npm_module.

> It took every ounce of energy NOT to convert the Fusion core into an NPM module.


You may choose to build out an NPM module from the modified components so as to ensure consistency within your project and teams.

### What does Fusion Offer out of the Box? ###

* Every component is a Single File Component. You can simply copy and paste a component file into a project and start using it (*just make sure you have emotion.js installed as a dependency*).

* Fusion Components use Emotion.js. If you are not into CSS in JS, you can simply copy out the styles into a separate css file and import it in.

* Every Component is Theme-able using [Theming](https://github.com/iamstarkov/theming).

* All components aim to be as accessible as possible.

* Every component file is under 150 lines of code. (*may change..*)
