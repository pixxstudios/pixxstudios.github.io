---
title: "undefined and null in Javascript"
date: "2020-10-06"
categories: 
  - "javascript"
tags: 
  - "javascript"
  - "null"
  - "undefined"
---

### **undefined**

In Javascript undefined (a primitive type in Javascript) gets assigned to a variable that we declare but don't assign a value to. It's Javascript's way of telling that the value of this variable is not defined.

![undefined](images/Screen-Shot-2020-10-04-at-9.44.03-PM.png)

Even a function in Javascript which does not return anything, will return undefined by default.

![undefined](images/Screen-Shot-2020-10-04-at-9.46.23-PM.png)

So, to avoid any error we should never assign undefined to a variable manually.

```javascript
typeof undefined
outputs: undefined
```

* * *

### **null**

Unlike **undefined**, **null** (another primitive type in Javascript) is used when we want to manually or intentionally set the value of a variable to be empty.

When comparing null with undefined remember to use === instead of ==, reason being

```javascript
null == undefined
returns true as it doesn't check for the type and performs type-conversion
```

```javascript
null === undefined
return false
```

```javascript
typeof null
is object and not null
```

(more details [_here_](https://2ality.com/2013/10/typeof-null.html))
