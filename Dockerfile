FROM node:8.0.0-alpine

# Set ENV defaults
ENV PORT=80
ENV HOST=0.0.0.0

# Other config information
ARG install_dir=/var/node/tech.otter.wildmagic/
# Create directory
RUN mkdir -p ${install_dir}
WORKDIR ${install_dir}

# Move code there
COPY . .

# Expose ports
EXPOSE ${PORT}

# Start the server
CMD ["node", "app.js"]
