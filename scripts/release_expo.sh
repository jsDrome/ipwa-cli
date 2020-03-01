set -e
npx expo login --non-interactive -u $EXPO_CLI_USERNAME
npx expo publish --non-interactive --max-workers 0 --config expo.json
