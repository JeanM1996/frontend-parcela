FROM node
WORKDIR /opt/backsiembra
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
