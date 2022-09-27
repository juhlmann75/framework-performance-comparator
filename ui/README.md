# Metrics UI

## Dev 

```bash
yarn install --frozen-lockfile  # install dependencies
# Run the tests using cli to product csv results
yarn run etl                    # takes csv results from k6 and converts to typescript at src/data/index.ts
yarn serve                      # run local with web server
yarn build                      # build for production
```

The generated `src/data/index.ts` file is ignored by git.

## Reference

https://k6.io/docs/using-k6/metrics/
