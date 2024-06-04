# Installation

```shell
# install npm dependency
npm install
```

```shell
# start application
npx nodemon index.js
```

# Usage
| Variable                    | Description                                           |
| ---                         | ---                                                   |
| `OUTPUT_LANGUAGE`           | the language you want AI to translate                 |
| `INPUT_MESSAGE_BY_ENGLISH`  | the message by English that you want AI to translate  |

Ex:
```shell
const OUTPUT_LANGUAGE = "Vietnamese";
const INPUT_MESSAGE_BY_ENGLISH = "First application here!"; # Ứng dụng đầu tiên ở đây!
```

## Result
Open `localhost:3000` to see the translation.

# Note
This application need `.env` file to run. Plz contact to the author for one.