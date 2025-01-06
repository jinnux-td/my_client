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

1. General
   React need to run in different browsers with different feature. Though browsers have common but can be different too. Just like Java, React create a wrapper SyntheticEvent object to normalize even handle interface.
   By move browser compatibility logic to a place, which is handle internal by React library, developers can concentrate in UI logic

Usually, general component (Button) does not contain event handler logic but style, specific component (UploadButton) contains general component and attach event handler logic
With React component, passed props is just props. But with built-in element, event handler is register to DOM node. At the same time, property name is different between detail components and general components

In conclusion, passed event handler to React component can be any name as normal property while event handler pass to HTML element must be correct as convention

2. Event propagation
   Event move up from component to root when it happen in a child node. However, a node can choose to stop event propagation chain when it handle the event (event object is passed to event handler).
   The event passed to event handler is the object belong to component. However, calling e.stopPropagation() prevent parent component receive event because e wil not call some function like next() in Express to pass to parent object.

3. Some elements's default event handler
   Form and some element has default handler when we interact. It;s may not what we want, so developer can disable those feature if needed

4. State changing using event handler
   Side effect should put into event handler. However, event handler modify local state is bad as modify it while rendering. It make debugging harder when some element unintentionally invoke this event and make state of component changed (this is still ok, just like class). But, having event handler modify local state leads to closure, which is the component can not be collected by garbage collector as long as the event handler exist => Memory leak
   We store mutable state in a central memory for management => Local state use central state + event handler point to central state => Component can be cleared after usage
