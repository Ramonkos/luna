FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml

RUN conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/lunaProject/bin:$PATH

RUN echo "source activate lunaProject" >~/.bashrc

COPY ./backend /backend

WORKDIR /backend