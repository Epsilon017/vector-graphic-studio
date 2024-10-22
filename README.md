# vector-graphic-studio
A browser-based application for creating specialized vector graphics that can be animated and customized during runtime.

## Overview
This project is meant for users to create and animate vector models. This system allows developers to dynamically customize aspects of the models in real time. The use case that originally inspired this system was customizing a player's avatar with their chosen outfits and accessories and seeing those choices reflected instantly in every animation. This program is meant to be usable by artists who are contributing to the development of a program, such as a game.

The main workflow is drawing path-based graphics, rigging those paths to a skeleton, attaching customizable slots to the skeleton, and then applying keyframe animations to the skeleton. The model produced is exported to a file and then loaded into another JavaScript project using an imported object class. That object has the capability to swap different graphics into the model's slots and have the model's animation be quickly re-rendered during runtime.

## Project Engine Structure
Runs on an object-oriented, component-based architecture, similar to Unity.
