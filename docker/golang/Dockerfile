#versionはしっかり確認して使って
FROM golang:latest

ENV GO111MODULE=on

COPY ../golang/ /go/src/app/

WORKDIR /go/src/app

# airを入れて楽に開発。導入時の自動コンパイルツールを使って
RUN go get -u github.com/cosmtrek/air

# installしたものを入れる
# RUN go mod download

CMD air -c .air.toml