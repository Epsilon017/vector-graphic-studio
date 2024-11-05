# vector-graphic-studio
A browser-based application for creating specialized vector graphics that can be animated and customized during runtime.

## Overview
This project is meant for users to create and animate vector models. This system allows developers to dynamically customize aspects of the models in real time. The use case that originally inspired this system was customizing a player's avatar with their chosen outfits and accessories and seeing those choices reflected instantly in every animation. This program is meant to be usable by artists who are contributing to the development of a program, such as a game.

The main workflow is drawing path-based graphics, rigging those paths to a skeleton, attaching customizable slots to the skeleton, and then applying keyframe animations to the skeleton. The model produced is exported to a file and then loaded into another JavaScript project using an imported object class. That object has the capability to swap different graphics into the model's slots and have the model's animation be quickly re-rendered during runtime.

## Project Engine Structure

**Hierarchy:** Scene Manager → Scene → Entity Collection → Entity → Component

- The engine is built on an object-oriented, component-based architecture similar to Unity's approach.
- **Components** encapsulate common object functionalities (e.g. physics, rendering, and input handling).
  - Each **Component** instance is attached to an **Entity**, adding specific functionality to the Entity.
- **Entities** are individual objects or actors in the scene (e.g. characters, items, and obstacles).
  - All **Entity** instances are stored in an **Entity Collection**, which acts as a container for the scene’s entities.
- **Scenes** are structured to hold the **Entity Collection** and any necessary resources (like textures or audio) for the program’s current state.
  - Each **Scene** is a class derived from an abstract **Scene** base class, enabling specialized implementations for different game levels or program states.
- The **Scene Manager** is a singleton (only one instance exists within the program).
  - It manages the lifecycle of **Scenes**, determining which **Scene** is active and handling its updates and rendering.
- **Update and Draw Flow**:
  - The **Scene Manager** invokes the update and draw methods on the active **Scene**.
  - These calls propagate down the hierarchy, ensuring each level is updated and rendered in sync.
