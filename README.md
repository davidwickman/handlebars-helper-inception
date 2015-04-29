This helper allows evaluation of nested expressions found in JSON or your given dataset. 

## Features

* Evalulation of nested expressions in data.


## Examples

Given the following JSON, a helper can be used to evaluate up to 5 levels of nested expressions. 

```json
{
    "user": {
        "jobTitle": "{{description.one}} Front End {{description.two}}"
    },
    "description": {
        "one": "Senior",
        "two": "Developer {{startDate.new}}"
    },
    "startDate": {
        "new": ", 2015"
    }
} 
```

Usage: `{{ helperInception user.jobTitle }}`
Output: `Senior Front End Developer, 2015`
