FROM aslushnikov/playwright:bionic

# install ffmpeg for playwright-video
USER root
RUN apt-get update && apt-get install -y ffmpeg
ENV FFMPEG_PATH=/usr/bin/ffmpeg

# use pwuser from base image
USER pwuser
WORKDIR /home/pwuser

# prepare app
COPY package.json package.json
RUN npm i
COPY . .

ENV QAW_ARTIFACT_PATH=./artifacts
CMD ./test.sh