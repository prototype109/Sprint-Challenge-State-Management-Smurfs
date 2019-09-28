1. What problem does the context API help solve?

Context API helps solve the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Requests to change certain parts of state depending on event coming in from view.
Reducers: Holds the logic where an action is accepted and determined to change the current state.
Store: The single point of truth where state lives and is changed immutibly through actions.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the current state of the entire application, this is generally state that is updated in multiple components and needed in those components.
Component state is the state of the current component being viewed, is not needed in the application state because only used in component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk allows us to take out the dispatch from the middleware and use it to manipulate an action to dispatch different things depending on what needs to
be done.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is redux, because of how all of state is
in one place and not strewn about in multiple components and I like the
immutability aspect of redux so I know what i'm putting in is going to
come out as expected.