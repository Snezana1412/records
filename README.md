# Record

# Project Setup

## Packages Needed

- `react-router-dom`
- `react-icons`
- `uuid`

## Route Setup

Use `BrowserRouter` to set up your routes. For today, we only need:

- `/`
- `/records`

## Context Setup

Set up your `recordsContext` with a `recordsReducer`. For today, we only need the following actions:

- `FETCH_RECORDS`

## Data Fetching

Use `useEffect()` to feed the data to your reducer and to your context via the reducer.

## Component Creation

Create the following components:

- `Layout`: Renders everything else at `/`
  - `Header`
  - `Footer`
- `Home`: Welcome screen
- `RecordList`: Displays all records
- `RecordCard`: Displays individual records in `RecordList`

## Bonus

- Add filter by title functionality
