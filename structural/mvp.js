// Model = data
// View = Visuals(html)
// Presenter = logic

//In an MVC, or Model-View-Controller pattern, we have our application organized in models, views, and controllers.
// Typically the organization will have views, pull data from controllers or models directly, and if there are any other
// logic or functions needed for the view, the controllers will supply them.So in other words, their views have access to both
// the models and controllers.Where MVP differs is the view doesn't have to access the model. It has to get it from the presenter
//  and the presenter serves as the logic, and supplier of data.In this pattern, the view passes through the presenter to get
// the data through functions, and the presenter pulls from the model.It is the major difference.
