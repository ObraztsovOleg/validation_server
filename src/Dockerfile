FROM node:15.14.0

COPY ./src/api/ /
WORKDIR /

ARG USERNAME=nonroot
ARG USER_GID=0

# Create the user
RUN useradd --gid $USER_GID -m $USERNAME && \
    npm i

ENTRYPOINT ["npm", "start"]

HEALTHCHECK --interval=30s --timeout=30s \
            --start-period=5s --retries=3 \
            CMD curl -X POST -H 'Content-Type: application/json' \
                -d '{ \
                        "refer": "3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH", \
                        "symbol": "BTC" \
                    }' \
                localhost:3500/api/validation || exit 1