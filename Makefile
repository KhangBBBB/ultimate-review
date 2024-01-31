.PHONY: dev install build vet deploy clean

dev:
	npm run dev

install:
	npm install

build:
	npm run build

vet:
	npm run check

deploy: vet build
	npm run deploy

clean:
	rm -rf dist node_modules