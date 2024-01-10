FROM ruby:3.0.1

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN mkdir /pokeapi

WORKDIR /pokeapi

COPY Gemfile /pokeapi/Gemfile

RUN bundle install

COPY Gemfile.lock /pokeapi/Gemfile.lock
COPY . /pokeapi

EXPOSE 3000

CMD sh start.sh
