.. _installation:

************
Installation
************

Installing Agda involves a number of choices and several installation steps. 
We hope that the following will get you started with whichever combination 
of operating system and features you're hoping for.

There are three elements to a usable Agda installation:

1. Agda
    * This is the tool itself that lets you compile / typecheck your code
2. Agda-mode (optional)
    * This component acts as a link between Agda and your preferred IDE (if any)
    * Plugins exist for: Emacs (common choice), Atom
3. Agda standard library (optional)
    * Although optional, you'll probably want this

For each of these you have a choice of installation options:

1. Pre-built package for your system
2. Hackage installation
3. Released version from source
4. Development version from source

Note that not all of these installation options will be:

* relevant/available for each of the elements,
* maintained for each of the elements.

While it is possible to mix-and-match installation options, it is not recommended. 
Released versions of the three elements are designed to be used in-sync with each other.
If you mix-and-match installation options you will most likely get out of sync versions.

As such, the following pages are grouped by installation option, rather than by element,
in the hope that you end up with a consistent, working system.

.. toctree::
    :maxdepth: 1

    pre-built
    hackage
    release-source
    develop-source

*This section was last updated on: 24th August 2019 by Ed Nutting*


.. _installation-flags:

Installation Flags
==================

Agda can be installed using different flags (though depending on your chosen
installation option (/method), these flags may not be accessible/settable):

:samp:`cpphs`
   Use `cpphs <https://hackage.haskell.org/package/cpphs>`_ instead of
   cpp. Default: off.

:samp:`debug`
   Enable debugging features that may slow Agda down. Default: off.

:samp:`flag enable-cluster-counting`
   Enable the ``--count-clusters`` flag (see
   :ref:`grapheme-clusters`). Note that if ``enable-cluster-counting``
   is ``False``, then the ``--count-clusters`` flag triggers an error
   message. Default: off.

*This section was last updated some time before: 24th August 2019 by an unknown author*
