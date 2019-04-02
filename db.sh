docker run --rm -d --name class101-mongo \
	-v class101-mongo-volume:/data/db \
	-e MONGO_INITDB_ROOT_USERNAME=$MONGO_USER \
	-e MONGO_INITDB_ROOT_PASSWORD=$MONGO_PASS \
	-p 27017:27017 \
	mongo:4.0.6