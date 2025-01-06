## Component principle

1. Component must be consistent. Same input always create same output
2. Component haven't have side effect, which change outside state. Instead, move those change state to property, change and pass it from outside (Which again, may need to move property up to its parent => Create and use property at same place). In case of complex property passing tree, we can use central data management tool like Redux
3. With data that belong to a component, we can change it as long as change in this component only
4. With functional programming style, high order function like map, filter, reduce is helpful
5. When thing need to be change, using predefined function in event handler allows data change after rendering (It's still data changing though. However, change after rendering is easier to manage). In React, these are useEffect

## UI as a tree

UI is usually describe in form of a tree of components. Pure html use DOM, CSS use CSSOM, React create its own virtual tree (render tree).

## Security

A consistent UI tree allows client easily understand the structure of frontend. This make developer better, but make created content vulnerable. User can read html DOM tree and create crawl tool to get data and clone source code of website

## Event handler

React need to run in different browsers with different feature. Though browsers have common but can be different too. Just like Java, React create a wrapper SyntheticEvent object to normalize even handle interface.
By move browser compatibility logic to a place, which is handle internal by React library, developers can concentrate in UI logic
