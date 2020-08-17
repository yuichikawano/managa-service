# docker build --no-cache=true -t ${REPO}:${CI_COMMIT_SHORT_SHA} -f docker/Dockerfile.${STAGE} .
#  sudo docker tag 0ba05f42099f do0514/yuichi
# docker
# id:do0514
# pas:yuichi0514doc
# docker Pushで必要だったなぜかわからん
# docker push service do0514/yuichi
FROM node:12.18.0-alpine

ENV NODE_ENV production
ENV HOST 0.0.0.0

# パッケージアップデート
RUN apk update && apk upgrade
RUN apk add git
RUN apk add curl

# ディレクトリ作成
RUN mkdir -p /app && \
    chown 1000:1000 /app

# node_modulesディレクトリのパーミッション変更
RUN chown -R 1000:1000 $(npm config get prefix)/lib
RUN chown -R 1000:1000 $(npm config get prefix)/bin
RUN chown -R 1000:1000 $(npm config get prefix)/share

# uid:1000に
USER 1000

# ファイルコピー
COPY --chown=1000:1000 . /app/
WORKDIR /app

# 不要envを削除
RUN rm -rf config/.env.me

# インストール & ビルド
RUN yarn install --production=false
# インストール & ビルド
RUN yarn build:dev

# ポート3000をオープン
EXPOSE 3000

# 起動
CMD yarn start:dev
