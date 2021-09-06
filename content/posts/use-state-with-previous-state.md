---
title: "Using useState hook with the previous state"
date: "2020-10-02"
categories: 
  - "javascript"
  - "reactjs"
tags: 
  - "reactjs"
  - "usestate"
---

Let's take a very basic use case of the useState() hook; updating the **count** variable on each click.

![usestate](images/carbon-2-1024x479.png)

The code look perfectly fine and will work as expected in almost every time.

_BUT the issue with this code is that setCount() doesn't guarantee that the previous **count** that it's going to use to either increment and decrement to get the next state will be the latest one._

To make sure that we always use the latest previous state for calculating the new state, we need to pass a callback function in the setCount rather than directly doing computation inside it.

![usestate](images/carbon-3-1024x377.png)

This way we can guarantee that we are always using the latest state value before using it.
